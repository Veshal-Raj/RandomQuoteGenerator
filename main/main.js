
//Fetch quotes from the API
async function fetchQuotes(){
    try {
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching quotes: ",error);
        return []
    }
}

// Update the quote when the button is clicked

async function updateQuote(){
    const quotes =await fetchQuotes()
    const randomIndex = Math.floor(Math.random()*quotes.length)
    output.textContent = quotes[randomIndex].text
}

const btn = document.getElementById("btn")
const output = document.getElementById("output")

btn.addEventListener("click",updateQuote)