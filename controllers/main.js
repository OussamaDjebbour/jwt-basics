export const login = async (req, res) => {
  res.send('Fake Login/Register/Signup Route');
};

export const dashboard = async (req, res) => {
  const luckuNumber = Math.floor(Math.random() * 100);
  console.log(luckuNumber);
  res.status(200).json({
    msg: `Hello John Doe`,
    secret: `Here is your authorized data, your luck number is ${luckuNumber}`,
  });
};
