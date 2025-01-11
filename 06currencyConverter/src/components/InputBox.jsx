import React, {useId} from "react";

/* Function Definition:

function InputBox({ ...props }) { ... }

This component uses props destructuring to accept various inputs:*/

function InputBox({
    label,                   //The label for the input field.
    amount,                  //The numeric value for the amount input field.
    onAmountChange,          //Callback for handling changes to the amount input field.
    onCurrencyChange,        //Callback for handling changes to the selected currency.
    currencyOptions = [],    //An array of available currency options for the dropdown.
    selectCurrency = "usd",  //The currently selected currency.
    amountDisable = false,   //A boolean to enable/disable the amount input field.
    currencyDisable = false, //A boolean to enable/disable the currency dropdown.
    
    className = "",          //Additional CSS classes for custom styling
}) {
   const amountInputId = useId()

    return (
        /*className: Allows passing additional custom styles via props.
         label: Displays the input label passed via the label prop.
         input:
           Type: number (only numeric values allowed).
           Placeholder: Displays "Amount" when the field is empty.
           Disabled: Controlled by the amountDisable prop.
           Value: Controlled by the amount prop.
           onChange: Calls onAmountChange callback, passing the numeric value from the input..*/
        
        
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
            <div className="w-1/2">
                <label htmlFor={amountInputId}
                 className="text-black/40 mb-2 inline-block"> 
                    {label}
                </label> 
                <input
                    id= {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled ={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange (Number(e.target.value))}
                />
            </div>        
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}> 
                            {currency} 
                            </option> // remeber to pass key in loop in react. this makes the performace better.
                        ))}
                
                </select> 
            </div>
        </div> 
        /* Dropdown Section:
                        Structure:
                        p: A description label for the dropdown.
                        select:
                        Class Styling:
                        Rounded corners, padding, light background, pointer cursor, and no outline.
                        Disabled: Controlled by the currencyDisable prop.
                        Value: Controlled by the selectCurrency prop.
                        onChange:
                        Calls onCurrencyChange callback, passing the selected currency value.
                        Dropdown Options:
                        Loops over currencyOptions array using .map() to create <option> elements.
                        Each <option>:
                        key: A unique identifier for React to optimize rendering.
                        value: The currency value.

                        Content: Displays the currency (e.g., USD, EUR).

        */
    );
}

export default InputBox;


/* Summary:
The InputBox component is a flexible form element with:

An input field for entering an amount.
A dropdown menu for selecting a currency.
Props to control the component's behavior:
Dynamically provide currency options (currencyOptions).
Handle changes via callbacks (onAmountChange and onCurrencyChange).
Enable/disable specific fields (amountDisable, currencyDisable).
Customize styling (className).
This component is reusable and well-suited for integrating into a currency converter application.*/