export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li className="ingredients-list__items" key={ingredient}>{ingredient}</li>
    ))
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div ref={props.ref}>
                    <h3 className="get-recipe-container__title">Ready for a recipe?</h3>
                    <p className="get-recipe-container__text">Generate a recipe from your list of ingredients.</p>
                </div>
                <button className="get-recipe-container__button" onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
}