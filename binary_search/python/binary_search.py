# Exemplo de algoritmo de busca binária usando Pthon.
# Neste exemplo não foi usado recursão, como no exemplo
# em JS, mas mesmo assim conseguimos fazer um loop 
# explícito para percorrer os itens corretos do array

def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1

    while baixo <= alto:
        meio = int((baixo + alto) / 2)
        
        chute = lista[meio]
        if chute == item:
            return meio
        if chute > item:
            baixo = 0
            alto = meio - 1
        if chute < item:
            baixo = meio + 1
            alto = len(lista) - 1
        else:
            return None

    return None

minha_lista = [1, 3, 5, 7, 9]

print("Item está no index: ", pesquisa_binaria(minha_lista, 5))
print("Item está no index: ", pesquisa_binaria(minha_lista, -1))
