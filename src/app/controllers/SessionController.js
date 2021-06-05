import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController{
  async store(req, res){
    const { login, password } = req.body;

    const user = await User.findOne({ where: { login }})

    if (!user){
      return res.status(401).json({ erro: 'Usuário ou senha errado(a).' })
    }

    if (!(await user.checkPassword(password))){
      return res.status(401).json({ erro: 'Usuário ou senha errado(a).'})
    }

    const {id, name} = user

    return res.status(200).json({
      user: {
        id,
        login,
        name
      },
      token: jwt.sign({ id, login, name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    })
  }
}

export default new SessionController();
