import uuid
from flask import Blueprint, request, jsonify
from firebase_admin import firestore

db = firestore.client()
user_Ref = db.collection('users')

userAPI = Blueprint('userAPI', __name__)

@userAPI.route('/create', methods=['POST'])
def add_user():
    try:
        id = uuid.uuid4()
        user_Ref.document(id.hex).set({
            'id': id.hex,
            'nombre': request.form['nombre'],
            'correo': request.form['correo'],
            'telefono': request.form['telefono']
        })
        return jsonify({"Registro exitoso": True}), 200
    except Exception as e:
        return f"Ocurrio un error: {e}"

@userAPI.route('/', methods=['GET'])
def get_users():
    try:
        users = [doc.to_dict() for doc in user_Ref.stream()]
        return jsonify(users), 200
    except Exception as e:
        return f"Ocurrio un error: {e}"

@userAPI.route('/<id>', methods=['GET'])
def get_user(id):
    try:
        user = user_Ref.document(id).get()
        return jsonify(user.to_dict()), 200
    except Exception as e:
        return f"Ocurrio un error: {e}"

@userAPI.route('/<id>', methods=['PUT'])
def update_user(id):
    try:
        user_Ref.document(id).update({
            'nombre': request.form['nombre'],
            'correo': request.form['correo'],
            'telefono': request.form['telefono']
        })
        return jsonify({"Actualizacion exitosa": True}), 200
    except Exception as e:
        return f"Ocurrio un error: {e}"

@userAPI.route('/<id>', methods=['DELETE'])
def delete_user(id):
    try:
        user_Ref.document(id).delete()
        return jsonify({"Eliminacion exitosa": True}), 200
    except Exception as e:
        return f"Ocurrio un error: {e}"