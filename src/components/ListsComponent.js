const ListsComponent = () => (
	<div>
		<h3>Ordered List</h3>
		<ol>
			<li>
				Item 1
				<ol>
					<li>Sub-item 1</li>
				</ol>
			</li>
			<li>Item 2</li>
		</ol>
		<h3>Unordered List</h3>
		<ul>
			<li>
				Item A
				<ul>
					<li>Sub-item A1</li>
				</ul>
			</li>
			<li>Item B</li>
		</ul>
	</div>
);

export default ListsComponent;
