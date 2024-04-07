import nltk
from nltk.corpus import stopwords
from nltk.cluster.util import cosine_distance
import numpy as np
# import networkx as nx

def preprocess_text(text):
    sentences = nltk.sent_tokenize(text)
    return sentences


def sentence_similarity(sent1, sent2, stop_words):
    words1 = [word.lower() for word in sent1.split() if word.isalnum() and word.lower() not in stop_words]
    words2 = [word.lower() for word in sent2.split() if word.isalnum() and word.lower() not in stop_words]
    
    all_words = list(set(words1 + words2))
    
    vector1 = [0] * len(all_words)
    vector2 = [0] * len(all_words)
    
    for word in words1:
        vector1[all_words.index(word)] += 1
        
    for word in words2:
        vector2[all_words.index(word)] += 1
    
    return 1 - cosine_distance(vector1, vector2)



def build_similarity_matrix(sentences, stop_words):
    matrix = np.zeros((len(sentences), len(sentences)))
    
    for i in range(len(sentences)):
        for j in range(len(sentences)):
            if i != j:
                matrix[i][j] = sentence_similarity(sentences[i], sentences[j], stop_words)
                
    return matrix




def generate_summary(text, num_sentences=5):
    nltk.download('punkt')
    nltk.download('stopwords')
    
    sentences = preprocess_text(text)
    stop_words = set(stopwords.words('english'))
    
    sentence_similarity_matrix = build_similarity_matrix(sentences, stop_words)
    
    sentence_scores = np.array(sentence_similarity_matrix.sum(axis=1))
    
    ranked_sentences = [sentence for _, sentence in sorted(enumerate(sentences), key=lambda x: sentence_scores[x[0]], reverse=True)]
    
    return " ".join(ranked_sentences[:num_sentences])



def summary_func(document):
    summary = generate_summary(document)
    return summary