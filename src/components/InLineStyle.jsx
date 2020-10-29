import React from 'react';

const InLineStyle = () => {
    const container = {
        display: 'flex',
        marginLeft: '20rem',
        marginTop:'3rem',
        flexDirection: 'column',
        width: '30rem',
        height:'50rem',
        color: '#444',
        boxShadow: '3px 3px black, -1em 0 .4em grey',
        borderRadius:'20px'
    }

    return (
        <div style={container}>
            <img style={{borderRadius:'30px 30px 0px 0px', padding:'0.8rem'}} src="https://picsum.photos/400"/>
            <h1 style={{color: '#0d1a26', fontWeight: 300, textShadow: '5px -3px 7px black', marginLeft:'2rem'}}>My card</h1>
            <h2 style={{color:'black', marginLeft:'2rem', fontWeight: 250, textShadow: '5px -3px 7px black',marginBottom:'0.1rem'}}>Secondary text</h2>
            <p style={{marginLeft:'2rem', marginBottom:'0.1rem'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam error in placeat quaerat, nesciunt dignissimos tenetur esse ad sunt, fuga quasi. Perferendis consequatur aliquid inventore assumenda modi. Aspernatur, officiis.</p>
            <ul style={{listStyleType:'none', fontSize:'20px', display:'flex', justifyContent: 'space-around', paddingLeft: '0px'}}>
                <li style={{backgroundColor:'grey', borderRadius:'10px', padding: '10px'}}>Item1</li>
                <li style={{backgroundColor:'grey', borderRadius:'10px', padding: '10px'}}>Item2</li>
                <li style={{backgroundColor:'grey', borderRadius:'10px', padding: '10px'}}>Item3</li>
            </ul>
        </div>
    )
}

export default InLineStyle;