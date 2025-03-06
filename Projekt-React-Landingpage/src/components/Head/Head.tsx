import './Head.css';


const Head = () => {
  return (
    <div className="Intro">
      <header className="header">
        <h3>Hello There</h3>
        <h1>We Are Glint</h1>
        <div className='line'></div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qui lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.
        </p>
      </header>
      <div className="stats">
        <div className="stat-item">
          <h1>127</h1>
          <p>Award Received</p>
        </div>
        <div className='vertical-line'></div>
        <div className="stat-item">
          <h1>1505</h1>
          <p>Cups of Coffee</p>
        </div>
        <div className='vertical-line'></div>
        <div className="stat-item">
          <h1>109</h1>
          <p>Projects Completed</p>
        </div>
        <div className='vertical-line'></div>
        <div className="stat-item">
          <h1>102</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
    
  );
};

export default Head;
