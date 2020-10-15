const {JWT, GoogleAuth} = require('google-auth-library');
 
async function main() {
  const client = new JWT({
    email: 'chandra.ant@gmail.com',
    key:'revolziven1',
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });
  const url = `https://dns.googleapis.com/dns/v1/projects/`;
  const res = await client.request({url});
  console.log(res.data);
}
 

async function test(){
    const auth = new JWT(
        'chandra.ant@gmail.com',
        null,
        'revolziven1',
        ["https://www.googleapis.com/auth/drive"],
        '1A0ERxvk4Wcla4j-9XOxGtCLEwftyeoUC'
      );
      const res = await auth.request('https://www.googleapis.com/auth/drive');
      console.log(res.data);
}
 
test().catch(console.error)