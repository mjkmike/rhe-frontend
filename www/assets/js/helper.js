/**
 *
 */
var Helper = {
	 bindListView: function (listviewComponent, dataArray, itemRenderFunction, keyField, bottompage) {
			$(listviewComponent).empty();

			for (var i=0; i<dataArray.length; i++){
				var _displayItem = itemRenderFunction(dataArray[i]);
				var _keyField = dataArray[i][keyField];

				if(bottompage)
					var _html = "<li data-icon='false' keyField='" + _keyField + "'><a class='pageAnchor' href='#'>" + itemRenderFunction(dataArray[i]) + "</a></li>\n";
				else
					var _html = "<li keyField='" + _keyField + "'><a class='pageAnchor' href='#'>" + itemRenderFunction(dataArray[i]) + "</a></li>\n";
				$(listviewComponent).append(_html);
			}

			$(listviewComponent).listview('refresh');
	 }

};
