function Card({ data }) {
  return (
    <div id="card">
       <div className="nameID">
       <td className="name">{data?.name}</td>
       <td># {data?.id}</td>
       </div>
      <div id="cardDiv-first">
        <img src={data?.sprites.other.home.front_default} alt={data?.name} />
      </div>
      <div id="cardDiv-second">
        <table>
          <thead>
            <tr>
              <th>Propiedad</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Altura</td>
              <td>{data?.height}</td>
            </tr>
            <tr>
              <td>Peso</td>
              <td>{data?.weight}</td>
            </tr>
            <tr>
              <td>Experiencia</td>
              <td>{data?.base_experience}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
