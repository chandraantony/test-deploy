const {JWT} = require('google-auth-library');
 
async function main() {
  const client = new JWT({
    email: "andikaherup@gmail.com",
    key: "AIzaSyDFybenRHUEaMPFiUQWg2oH_5m2-uN3dTw",
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });
  const url = `https://dns.googleapis.com/dns/v1/projects/react-firebase-starter-ml`;
  const res = await client.request({url});
  console.log(res.data);
}
 
main().catch(console.error);