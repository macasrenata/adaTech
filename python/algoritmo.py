# Tempo constante - $O(1)$

def get_first_element(my_list):
    return my_list[0]



# Tempo logarítmico - $O(\log n)$ 

def binary_search(arr, x):
    l = 0
    h = len(arr) - 1
    while l <= h:
        mid = (h + l) // 2
        if arr[mid] == x:
            return True
        elif arr[mid] < x:
            l = mid + 1
        else:
            h = mid - 1
    return False