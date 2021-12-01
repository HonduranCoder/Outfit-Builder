import React from 'react';

export default function Character({ face, top, bottom }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <article
        className="face"
        aria-label="face"
        style={{
          backgroundImage: `url(./${face}-head.png)`,
          height: 150,
          width: 150,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></article>

      <article
        className="top"
        aria-label="top"
        style={{
          backgroundImage: `url(./${top}-top.png)`,
          height: 150,
          width: 150,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></article>

      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <article
          className="bottom"
          aria-label="bottom"
          style={{
            backgroundImage: `url(./${bottom}-bottom.png)`,
            height: 150,
            width: 150,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></article>
      </section>
    </section>
  );
}
