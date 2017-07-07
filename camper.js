class FetchData extends React.Component {
	constructor(props) {
		super(props);
	}
	AJAX(event){
		this.setState({
			const json;
			$.ajax({
				url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
				success: function(data) {
					json = data;
				}
			})
			json: data;
		});	
	}

	render() {
		return (
			
			{/*Field in which parsed text is displayed*/}
			<div >
				<div dangerouslySetInnerHTML={{__html: this.state}} />
			</div>	
		)
	}
}

//renders MarkDown
ReactDOM.render(<FetchData />, document.getElementById('app'));

</script>
