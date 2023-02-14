import { Web3Button } from "@thirdweb-dev/react";
import { useState } from 'react';

export default function Component() {
  const [tokenId, setTokenId] = useState('');
  const[user, setUserAdd] = useState();
  const [expires, setExpire] = useState();
  const [value, setValue] = useState();
  return (
<div>
<div className="container">

    <label className='token'>Token ID</label>
          <input
            className='inputs'
            type='text'
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            placeholder='Token ID'
          /> <br/>
          <label className='user'>User</label>
          <input
            className='inputs'
            type='text'
            value={user}
            onChange={(e) => setUserAdd(e.target.value)}
            placeholder='User/Brand Name'
          /><br/>
          <label className='value'>Value</label>
          <input
            className='inputs'
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Enter the coupon-value'
          /><br/>
          <label className='expire'>Expires</label>
           <input
            className='inputs'
            type='text'
            value={expires}
            onChange={(e) => setExpire(e.target.value)}
            placeholder='Expiry date'
          /><br/><br/>
    <Web3Button
      contractAddress="0x5956c127EBa8cdD0CC8ddb7d06Abba4fdB8c376a"
      action={(contract) => {
        contract.call("setUser", tokenId, user, value, expires)
      }}
    >
      Generate Coupons
    </Web3Button>
   
    </div>
    <h3 className="heading">Developed by Mirac.eth</h3>
    </div>
  )
}
