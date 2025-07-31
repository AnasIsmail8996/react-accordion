
const FakeStore = ({currData, onToggle, active}) => {
    const {question, answer}=currData;

 
    return (
    <>
    <li className="list-group-item mb-3 p-3 border rounded shadow-sm">
  <div className="d-flex justify-content-between align-items-center mb-2">
    <p className="mb-0 fw-bold">{question}</p>
    <button className="btn btn-primary btn-sm px-5 p-4 fw-bolder" onClick={onToggle} >
      {active ? "Close" : "Show"}
      </button>
  </div>
  <p className="mb-0 text-muted">{ active && answer}</p>
</li>
    </>
  )
}

export default FakeStore;