from transformers import pipeline

model_name = 'deepset/roberta-base-squad2'

qa = pipeline('question-answering', model=model_name, tokenizer=model_name)

def qa_func(question, context):
    QA_input2 = [{'question': question, 'context': context}]
    output_0 = qa(QA_input2[0]['question'], QA_input2[0]['context'])
    return output_0['answer']
