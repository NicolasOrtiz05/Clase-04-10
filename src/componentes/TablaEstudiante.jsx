export const TablaEstudiante = ({ listaEstudiante }) => {
	return (
		<table className="table">
			<thead>
				<tr>
					<td scope="col">Id estudiante</td>
					<td scope="col">Nombre</td>
					<td scope="col">Semestre</td>
					<td scope="col">Eliminar</td>
				</tr>
			</thead>
			<tbody>
				{
					listaEstudiante.map(({ id, nombre, semestre }) => <tr key={id}>
						<td>{id}</td>
						<td>{nombre}</td>
						<td>{semestre}</td>
						<td><button type="submit" className="btn btn-primary">Editar</button></td>
					</tr>)
				}
			</tbody>
		</table>

	)
}