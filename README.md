# INFINITY CAROUSEL CUBE SHAPED

The carousel will receive some `array of assets` in async way.
Then a `virualIndexArray` will be created. This will contain only the indexes of 4 slides of the assets array. These indexes will change depending of where the `current` variable is pointed in this array.
ie:
`assets: [{ src: 'asset0' }, { src: 'asset1' }, { src: 'asset2' }, { src: 'asset3' }, { src: 'asset4' }, { src: 'asset5' }, { src: 'assset6' }]
current: 3 //Current index in virtualIndexArray
virtualIndexArray: [4,5,6,1] //Every number here represent the index in the assets array
`

## Rotation

Everytime the user move the cube, `current` will point to the slide in view, the rotation degrees value will be updated, but the new `virtualIndexArray` wont be generated until the animation finished (check `componentDidMount` funtion)

The perspective and rotation will be added by css.

Every left switch will add -90deg to the rotation, every right rotation will add +90deg to the rotation

## Hammerjs

Is used to detect the use movements