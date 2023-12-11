const PORT = 8001
const express = require('express')  /*const express = require('express') */
const cors = require('cors') /* const cors = require('cors') */
const app =express() 
app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/completions', async (req,res) => {
    const options = {
        method: "POST",
        headers:{
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: req.body.message}],
            max_tokens:100,
        })

    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options )
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})
app.listen(PORT, () => console.log('your server is running on PORT ' + PORT))
