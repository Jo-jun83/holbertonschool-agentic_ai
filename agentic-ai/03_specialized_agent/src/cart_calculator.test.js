const { calculateTotal } = require('./cart_calculator');

describe('calculateTotal', () => {
    test('should_return_zero_when_items_is_not_an_array', () => {
        // Arrange
        const items = null;

        // Act
        const result = calculateTotal(items);

        // Assert
        expect(result).toBe(0);
    });

    test('should_return_zero_when_cart_is_empty', () => {
        // Arrange
        const items = [];

        // Act
        const result = calculateTotal(items);

        // Assert
        expect(result).toBe(0);
    });

    test('should_apply_default_tax_when_tax_rate_is_omitted', () => {
        // Arrange
        const items = [{ price: 100, quantity: 1 }];

        // Act
        const result = calculateTotal(items);

        // Assert
        expect(result).toBe(120);
    });

    test('should_apply_default_quantity_when_quantity_is_omitted', () => {
        // Arrange
        const items = [{ price: 10 }];

        // Act
        const result = calculateTotal(items, 0);

        // Assert
        expect(result).toBe(10);
    });

    test('should_apply_default_price_when_price_is_omitted', () => {
        // Arrange
        const items = [{ quantity: 3 }];

        // Act
        const result = calculateTotal(items, 0);

        // Assert
        expect(result).toBe(0);
    });

    test('should_calculate_total_when_multiple_items_are_provided', () => {
        // Arrange
        const items = [
            { price: 10, quantity: 2 },
            { price: 5.5, quantity: 1 },
            { price: 20, quantity: 3 },
        ];

        // Act
        const result = calculateTotal(items, 0);

        // Assert
        expect(result).toBe(85.5);
    });

    test('should_ignore_negative_price_when_calculating_subtotal', () => {
        // Arrange
        const items = [{ price: -10, quantity: 2 }];

        // Act
        const result = calculateTotal(items, 0);

        // Assert
        expect(result).toBe(0);
    });

    test('should_ignore_negative_quantity_when_calculating_subtotal', () => {
        // Arrange
        const items = [{ price: 10, quantity: -2 }];

        // Act
        const result = calculateTotal(items, 0);

        // Assert
        expect(result).toBe(0);
    });

    test('should_apply_discount_before_tax', () => {
        // Arrange
        const items = [{ price: 100, quantity: 1 }];

        // Act
        const result = calculateTotal(items, 0.20, 20);

        // Assert
        expect(result).toBe(96);
    });

    test('should_not_return_negative_when_discount_exceeds_subtotal', () => {
        // Arrange
        const items = [{ price: 10, quantity: 1 }];

        // Act
        const result = calculateTotal(items, 0.20, 50);

        // Assert
        expect(result).toBe(0);
    });

    test('should_apply_no_tax_when_tax_rate_is_zero', () => {
        // Arrange
        const items = [{ price: 12.345, quantity: 2 }];

        // Act
        const result = calculateTotal(items, 0);

        // Assert
        expect(result).toBe(24.69);
    });

    test('should_round_total_to_two_decimal_places', () => {
        // Arrange
        const items = [{ price: 19.99, quantity: 1 }];

        // Act
        const result = calculateTotal(items, 0.20);

        // Assert
        expect(result).toBe(23.99);
    });

    test('should_use_default_discount_when_discount_is_omitted', () => {
        // Arrange
        const items = [{ price: 25, quantity: 2 }];

        // Act
        const result = calculateTotal(items, 0.10);

        // Assert
        expect(result).toBe(55);
    });

    test('should_support_decimal_quantities', () => {
        // Arrange
        const items = [{ price: 10, quantity: 1.5 }];

        // Act
        const result = calculateTotal(items, 0);

        // Assert
        expect(result).toBe(15);
    });

    test('should_convert_numeric_string_values_to_numbers', () => {
        // Arrange
        const items = [{ price: '12.5', quantity: '2' }];

        // Act
        const result = calculateTotal(items, 0);

        // Assert
        expect(result).toBe(25);
    });

    test('should_throw_when_an_item_is_null', () => {
        // Arrange
        const items = [null];

        // Act
        const act = () => calculateTotal(items, 0);

        // Assert
        expect(act).toThrow();
    });

    test('should_allow_a_cart_with_zero_value_items', () => {
        // Arrange
        const items = [{ price: 0, quantity: 5 }];

        // Act
        const result = calculateTotal(items, 0.20, 10);

        // Assert
        expect(result).toBe(0);
    });
});
