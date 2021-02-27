import axios from 'axios'

export const formRetrieval = async (req,res) =>{
  axios.get('https://api.typeform.com/forms/bPZ35Huh/responses',{
    headers:{
      Authorization: 'Bearer 6bey6hDQamxi1QK3NmnzLdxYKzGoac1Xp5WupcQjLeeH',
      typeform_personal_token: '6bey6hDQamxi1QK3NmnzLdxYKzGoac1Xp5WupcQjLeeH'
    }
  }).then((response) =>{
    console.log(response);
    return res.send(response.data);
  },(err) => {
    return res.status(401).send(err);
  })
}