import './App.css';

function Cake() {
    return (
      <>
        <h1>Carpathian Cake Recipe</h1>
        <img src="https://i.ytimg.com/vi/5njN_172akA/maxresdefault.jpg" alt="Carpathian Cake" className='photoCake'/>
        <h2>Ingredients:</h2>
        <ul>
          <li>3 cups all-purpose flour</li>
          <li>2 cups sugar</li>
          <li>1 cup vegetable oil</li>
          <li>1 cup milk</li>
          <li>4 eggs</li>
          <li>2 teaspoons baking powder</li>
          <li>1 teaspoon vanilla extract</li>
          <li>1/4 teaspoon salt</li>
          <li>1/2 cup walnuts, chopped</li>
          <li>1/2 cup raisins</li>
          <li>1/2 cup dried apricots, chopped</li>
          <li>1/2 cup candied orange peel, chopped</li>
          <li>1/2 cup rum</li>
        </ul>
        <h2>Preparation:</h2>
        <ol>
          <li>Preheat the oven to 350°F (175°C). Grease and flour a 9-inch (23 cm) cake pan.</li>
          <li>In a large bowl, whisk together the flour, sugar, baking powder, and salt.</li>
          <li>In a separate bowl, beat the eggs, then stir in the milk, vegetable oil, and vanilla extract.</li>
          <li>Add the wet ingredients to the dry ingredients and stir until just combined.</li>
          <li>Stir in the walnuts, raisins, dried apricots, and candied orange peel.</li>
          <li>Pour the batter into the prepared cake pan and bake for 50-60 minutes, or until a toothpick inserted into the center of the cake comes out clean.</li>
          <li>While the cake is still warm, poke several holes in the top with a fork and pour the rum over the cake.</li>
          <li>Allow the cake to cool completely before slicing and serving.</li>
        </ol>
      </>
    );
  }
  
  export default Cake;