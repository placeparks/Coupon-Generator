import { Web3Button } from "@thirdweb-dev/react";
import { useState } from 'react';

export default function Component() {
  const [tokenId, setTokenId] = useState('');
  const[user, setUserAdd] = useState();
  const [expires, setExpire] = useState();
  return (

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
          <label className='expire'>Expires</label>
           <input
            className='inputs'
            type='text'
            value={expires}
            onChange={(e) => setExpire(e.target.value)}
            placeholder='Expiry date'
          /><br/>
    <Web3Button
      contractAddress="0x4eB0470A0aC629685d0Df4De4DE6BB4748EfbcDe"
      action={(contract) => {
        contract.call("setUser", tokenId, user, expires)
      }}
    >
      Generate Coupons
    </Web3Button>
    </div>
  )
}