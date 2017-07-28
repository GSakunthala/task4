import Ember from 'ember';

export default Ember.Component.extend({
		tagName:'li',
		classNameBindings : ['floating'],
		floating : 'floatleft',

		
		click()
		{
			
			//alert('doubleclciked');
		}

});
