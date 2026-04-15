export function Contato() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contato</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input type="email" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Mensagem</label>
              <textarea className="form-control"></textarea>
            </div>

            <button className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}