import Ember from 'ember';

export default Ember.Route.extend({
	model()
	{/*
		return {
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      propertyType: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }*/
	},
	serialize(model)
	{
		return {desc:model.id}
	}
});
