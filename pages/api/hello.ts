// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let name: string;

export default (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
