export const isOwner = async (req, res, next) => {
    // console.log(req.headers.authorization);
    if (req.body.cpf === undefined) {
        return res.status(400).json({ error: 'informe o cpf do usuário que deseja atualizar'});
    }
	next()
}