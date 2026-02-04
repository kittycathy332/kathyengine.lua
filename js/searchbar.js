document.getElementById('searchInput').addEventListener('keyup',
	function()
	{
		const filter = this.value.toLowerCase();
		const items = document.querySelectorAll('#itemList li');

		items.forEach(function(item)
		{
			// Get both function name and category text
			const funcName = item.querySelector('.function-name')?.textContent.toLowerCase() || '';
			const category = item.querySelector('.function-category')?.textContent.toLowerCase() || '';
			const fullText = funcName + category;

			if (fullText.includes(filter))
				item.style.display = '';
			else
				item.style.display = 'none';
		});
	}
);