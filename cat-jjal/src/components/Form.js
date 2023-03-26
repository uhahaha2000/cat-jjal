const Form = ({ updateMainCat }) => {
	const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
	const [value, setValue] = React.useState("");
	const [errorMsg, serErrorMsg] = React.useState("");

	function handleInputChange(e) {
		const userValue = e.target.value;
		serErrorMsg("");
		if (includesHangul(userValue)) {
			serErrorMsg("한글은 입력할 수 없습니다.");
		}

		setValue(userValue.toUpperCase());
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		serErrorMsg("");

		if (value === "") {
			serErrorMsg("빈 값으로 만들수 없어요.");
			return;
		}
		updateMainCat(value);
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<input
				type="text"
				name="name"
				placeholder="영어 대사를 입력해주세요"
				onChange={handleInputChange}
				value={value}
			/>
			<button type="submit">생성</button>
			<p style={{ color: "red" }}>{errorMsg}</p>
		</form>
	);
};

export default Form;
