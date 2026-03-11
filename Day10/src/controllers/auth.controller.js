export async function registerUser(req, res, next) {
    res.status(201).json({
        message:"user registered successfully"
    })
}

/*
 * user => {
 * username:{ type: String, required: true },
 * email:{ type: String, required: true,unique: true },
 * password:{ type: String, required: true }
 * }
 */