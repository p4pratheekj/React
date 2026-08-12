import React from 'react';

const Profile = () => {
  const user = {
    name: 'Pratheek',
    email: 'pratheekjaiml@gmail.com',
    status: 'VERIFIED',
    joined: '2024.10.15'
  };

  const orderHistory = [
    { id: 'ORD-9938', date: '2026.04.12', status: 'DELIVERED', total: '$245.00' },
    { id: 'ORD-9012', date: '2026.02.08', status: 'ARCHIVED', total: '$180.00' }
  ];

  return (
    <div className="container" style={{ padding: '60px 20px', minHeight: '80vh', color: '#fff' }}>
      <div style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', textTransform: 'uppercase', letterSpacing: '-3px', margin: 0, lineHeight: '0.9', fontFamily: '"Inter", sans-serif', fontWeight: '900' }}>
          USER <br/> 
          <span style={{ color: 'transparent', WebkitTextStroke: '1px #fff' }}>PROFILE</span>
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div style={{ border: '1px solid #333', padding: '30px', backgroundColor: '#050505', position: 'relative' }}>
          {/* Tactical corner accent */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '15px', height: '15px', borderTop: '2px solid #fd0000', borderLeft: '2px solid #ff3333' }}></div>
           <div style={{ position: 'relative', top: 385, left: 515, width: '15px', height: '15px', borderBottom: '2px solid #ff3333', borderRight: '2px solid #ff3333' }}></div>
          
          <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#888', marginBottom: '30px', fontFamily: '"Space Mono", monospace' }}>
            // Identity_Matrix
          </h2>
          
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: '"Space Mono", monospace' }}>NAME</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{user.name}</div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: '"Space Mono", monospace' }}>COMM_LINK</div>
            <div style={{ fontSize: '1.2rem', fontFamily: '"Space Mono", monospace' }}>{user.email}</div>
          </div>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: '"Space Mono", monospace' }}>STATUS</div>
              <div style={{ color: '#00ffa3', fontWeight: 'bold', fontFamily: '"Space Mono", monospace' }}>[{user.status}]</div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: '"Space Mono", monospace' }}>INITIALIZED</div>
              <div style={{ fontFamily: '"Space Mono", monospace' }}>{user.joined}</div>
            </div>
          </div>

          <button style={{ 
            width: '100%', 
            padding: '15px', 
            backgroundColor: 'transparent', 
            color: '#fff', 
            border: '1px solid #fff', 
            fontSize: '1rem', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            cursor: 'pointer',
            fontFamily: '"Space Grotesk", sans-serif',
            transition: 'background 0.2s, color 0.2s'
          }}
          >
            Update Parameters
          </button>
        </div>
        <div>
          <h2 style={{ fontSize: '1.8rem', textTransform: 'uppercase', letterSpacing: '-1px', borderBottom: '2px solid #fff', paddingBottom: '10px', marginBottom: '30px' }}>
            Logistics History
          </h2>
          
          {orderHistory.length === 0 ? (
            <p style={{ color: '#888', fontFamily: '"Space Mono", monospace' }}>NO_DATA_FOUND</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {orderHistory.map((order, index) => (
                <div key={index} style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr 1fr 1fr', 
                  gap: '10px', 
                  border: '1px solid #333', 
                  padding: '20px',
                  alignItems: 'center',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.9rem'
                }}>
                  <div style={{ color: '#fff', fontWeight: 'bold' }}>{order.id}</div>
                  <div style={{ color: '#888' }}>{order.date}</div>
                  <div style={{ color: order.status === 'DELIVERED' ? '#00ffa3' : '#555' }}>
                    {order.status}
                  </div>
                  <div style={{ textAlign: 'right', fontWeight: 'bold' }}>{order.total}</div>
                </div>
              ))}
            </div>
          )}
          
          <button style={{ 
            marginTop: '30px',
            background: 'transparent',
            color: '#ff3333',
            border: 'none',
            borderBottom: '1px solid #ff3333',
            padding: '5px 0',
            cursor: 'pointer',
            fontFamily: '"Space Mono", monospace',
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }}>
            Terminate Session (Logout)
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;