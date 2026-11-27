// Simulation très basique d'un connecteur de base de données
const db = {
    query: (sql, params = []) => {
        console.log(`[DB ENGINE] Exécution de la requête préparée : ${sql}`);

        if (sql === "SELECT * FROM users WHERE email = ? AND password = ?") {
            const [email, password] = params;
            if (email !== 'dev@entreprise.com' || password !== 'password123') {
                return [];
            }
            return [{ id: 1, role: 'admin', email: 'dev@entreprise.com' }];
        }
        return [];
    }
};

/**
 * Fonction d'authentification.
 */
function authenticateUser(email, password) {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    const results = db.query(sql, [email, password]);

    if (results.length > 0) {
        return { success: true, user: results[0] };
    }
    return { success: false, message: "Identifiants invalides" };
}

module.exports = { authenticateUser };