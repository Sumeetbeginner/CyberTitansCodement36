
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import joblib
import random

myModel = joblib.load('sentiment_analysis.joblib')


def preprocess(text):
    stop_words = set(stopwords.words('english'))
    words = word_tokenize(text)
    filtered_words = [word.lower() for word in words if word.isalpha() and word.lower() not in stop_words]
    return ' '.join(filtered_words)


def sentiment_func(text):
    new_text = text
    preprocessed_text = preprocess(new_text)
    prediction = myModel.predict([preprocessed_text])[0]

    emotions = {0: 'sad', 1: 'happy', 2: 'confused'}
    predicted_emotion = emotions[prediction]
    responses = {
    'happy': [ 
    {"reply": "Your feelings are important, and I'm here to support you. If you're feeling happy, cherish those moments. If you're going through a tough time, remember that it's okay to ask for help."},
    {"reply": "No matter the emotion, your well-being matters. If you're joyful, celebrate those moments. If you're feeling down, know that I'm here to lend an understanding ear and offer support."},
    {"reply": "Your emotions are valid, and I appreciate your openness. Whether you're smiling or facing challenges, take time for self-compassion. If you need someone to talk to, I'm here."},
    {"reply": "In moments of joy, bask in the positivity around you. In times of sadness, remember that you're not alone, and reaching out for support is a strength."},
    {"reply": "I see your strength in every emotion. If you're happy, savor those moments. If you're feeling low, know that resilience is born from facing challenges, and I believe in your strength."},
    {"reply": "Your emotions are like chapters in your unique story. If it's a moment of joy, celebrate it. If it's a challenging chapter, remember that you have the power to turn the page and embrace new possibilities."},
    {"reply": "Whether you're riding high on happiness or navigating through difficulties, your journey is valid. If you ever need someone to share the load, I'm here to offer a listening ear and support."},
    {"reply": "Every emotion you experience is a part of your journey. In moments of joy, celebrate and share your happiness. In times of sadness, know that you're not alone, and I'm here to provide comfort."},
    {"reply": "Your emotions are a reflection of your unique human experience. If it's a moment of happiness, relish it. If it's a moment of sadness, allow yourself the space to heal, and know that support is available."},
    {"reply": "Life is a mix of highs and lows, and your feelings are valid in every moment. If you're on cloud nine, enjoy the view. If you're navigating through challenges, remember that you're not alone, and I'm here to support you."},
    ],
    'sad': [
        {"reply": "It's okay not to feel okay. How about practicing self-compassion? Be kind to yourself and acknowledge that it's okay to feel sad sometimes. Treat yourself with the same compassion and understanding that you would offer to a friend in a similar situation."},
        {"reply": "I'm here for you during this difficult time. How about focusing on things that bring you comfort? Find solace in activities or hobbies that bring you joy and comfort. Whether it's listening to music, spending time with pets, or practicing a creative outlet, prioritize activities that soothe your soul."},
        {"reply": "Your feelings are valid. How about practicing mindfulness to help ground yourself in the present moment? Practice mindfulness techniques, such as deep breathing or meditation, to help you stay present and grounded. By focusing on the here and now, you can alleviate some of the distress caused by worrying about the past or future."}
    ],
    'confused': [
        {"reply": "Feeling confused can be overwhelming. How about breaking down the problem into smaller, more manageable parts? Break down the confusing situation into smaller components and tackle each one separately. By focusing on one aspect at a time, you can make the problem feel more manageable and increase your chances of finding a solution."},
        {"reply": "It's okay to feel unsure about what to do next. How about exploring different options before making a decision? Consider brainstorming multiple solutions or approaches to the problem and weigh the pros and cons of each. Exploring different options can help you make a more informed decision and feel more confident about your choice."},
        {"reply": "Feeling confused is part of the learning process. How about embracing uncertainty as an opportunity for growth? View confusion as a natural part of the learning process and an opportunity for personal growth. Instead of fearing uncertainty, embrace it as a chance to learn and develop new skills."}
    ]
    }
    if predicted_emotion in responses:
        return random.choice(responses[predicted_emotion])["reply"]
    else:
        return {"reply": "Invalid emotion provided."}