import requests

api_key = "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"
prompt = "What is the capital of France?"

response = requests.post(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    },
    json={
        "prompt": prompt,
        "max_tokens": 2048,
        "stop": "Paris"
    }
)

print(response.json())