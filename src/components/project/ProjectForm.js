import styles from "./ProjectForm.module.css";

function ProjectForm() {
	return (
		<form>
			<label>Nome do projeto:</label>
			<div>
				<input type="text" placeholder="Insira o nome do projeto"></input>
			</div>
			<label>Orçamento do projeto:</label>
			<div>
				<input type="number" placeholder="Insira orçamento total"></input>
			</div>
			<label>Selecione a categoria: </label>
			<select name="category_id">
				<option disabled selected>
					Selecione a categoria
				</option>
				<option>Infra</option>
				<option>Desenvolvimento</option>
				<option>Design</option>
				<option>Planejamento</option>
			</select>
			<div>
				<input type="submit" value="Criar projeto"></input>
			</div>
		</form>
	);
}
export default ProjectForm;
