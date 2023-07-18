const emailVerificationTemp = (token) =>
  `
      <h1>Please use the following link to activate your account</h1>
      <p>
         <a href="${process.env.CLIENT_URL}/auth/activate/${token}">${process.env.CLIENT_URL}/auth/activate/${token}</a>
      </p>
      <hr/>
      <p>This email may contain sensetive information</p>
  `;

export default emailVerificationTemp;
