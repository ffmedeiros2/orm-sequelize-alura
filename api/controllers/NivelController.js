const database = require('../models');

class NivelController {
    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll();
            return res.status(200).json(todosOsNiveis);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params;
        try {
            const umaNivel = await database.Niveis.findOne({
                where: { id: Number(id) },
            });
            return res.status(200).json(umaNivel);
        } catch (erro) {
            return res.status(500).json({ mensagem: erro.message });
        }
    }

    static async criaNivel(req, res) {
        const novaNivel = req.body;
        try {
            const novaNivelCriada = await database.Niveis.create(novaNivel);
            return res.status(200).json(novaNivelCriada);
        } catch (erro) {
            return res.status(500).json({ mensagem: erro.message });
        }
    }

    static async atualizaNivel(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Niveis.update(novasInfos, {
                where: { id: Number(id) },
            });
            const NivelAtualizada = await database.Niveis.findOne({
                where: { id: Number(id) },
            });
            return res.status(200).json(NivelAtualizada);
        } catch (erro) {
            return res.status(500).json({ mensagem: erro.message });
        }
    }

    static async apagaNivel(req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({
                where: { id: Number(id) },
            });
            return res.status(204).json();
        } catch (erro) {
            return res.status(500).json({ mensagem: erro.message });
        }
    }
}

module.exports = NivelController;
