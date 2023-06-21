import './App.css';

function App() {
  const count = event => {
    let para = event.target.value.split(" ").join(',').split('.').join(',').split('?').join(',').split('!').join(',').split(',');
    para = para.filter(word => {
      return word != ''
    })
    let p = document.getElementById('count');
    p.innerText = "Word Count: " + para.length;
  }
  return (
    <>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea onChange={count} rows="8" cols="80" />
      <p id="count">Word Count: 0</p>
    </>
  );
}

export default App;
