/* eslint-disable react/prop-types */
import { useState } from 'react'

function Board({ handleClick, pilihan, pilihanComp, status }){
  return (
    <div className='board'>
        <div className='computer'><span>Anda memilih: {pilihan ? pilihan : '(silahkan pilih)'}, computer memilih: {pilihanComp ? pilihanComp : '(silahkan pilih)'}, anda {status ? status : '(silahkan pilih)'}</span></div>
        <div className='batu' onClick={() => handleClick('Batu')}>Batu</div>
        <div className='gunting' onClick={() => handleClick('Gunting')}>Gunting</div>
        <div className='kertas' onClick={() => handleClick('Kertas')}>Kertas</div>
    </div>
  );
}

function App() {
  const [pilihan, setPilihan] = useState('');
  const [pilihanComp, setPilihanComp] = useState('');
  const [status, setStatus] = useState('');

  function handleClick(pilihanP){
    setPilihan(pilihanP);
    const random = Math.random();

    if(random < 0.34){
      setPilihanComp('Batu');
    } else if(random < 0.67){
      setPilihanComp('Gunting');
    } else if(random <= 1){
      setPilihanComp('Kertas');
    }

    if(pilihan === pilihanComp){
      setStatus('Seri');
    } else if(pilihan === 'Batu' && pilihanComp === 'Kertas'){
      setStatus('Kalah');
    } else if(pilihan === 'Batu' && pilihanComp === 'Gunting'){
      setStatus('Menang');
    } else if(pilihan === 'Gunting' && pilihanComp === 'Kertas'){
      setStatus('Menang');
    }

  }

  return (
    <>
      <Board handleClick={handleClick} pilihan={pilihan} pilihanComp={pilihanComp} status={status}/>
    </>
  );
}

export default App
