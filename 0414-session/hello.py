# fridayTodo = ['모프','웹프','멋사','술마시기']
# print(fridayTodo)

# fridayTodo.reverse()
# print(fridayTodo)

# fridayTodo.append('잠자기')
# print(fridayTodo)

# list =[-1,2,-4,5]
# list2=[]
# for i in list:
#     if(i>0) : list2.append(i)
# print(list2)

# bread = 197
# milk = 152
# student =17

# print('한명의 학생이 갖게되는 빵: ', (int)(bread/student))
# print('남는 빵:',(bread%student))
# print('한명의 학생이 갖게되는 우유: ',(int)(milk/student))
# print('남는 우유:',(milk%student))

# userID = ['kim', 'hong', 'lee']


# inputID = input('아이디입력:')

# inputPW=input('패스워드 입력')
# count=0
# for i in userID:
#     if(inputID==i):
#         if(inputPW=='123'):
#             print('로그인 성공')
#         else : print('로그인 실패: 비번틀림')
# result=0
# for i in range(1,101):
#     if((i%2)==0):
#         result+=i
# print('결과: ', result)


# while(True):
#     inputPW=input('넣어라: ')
#     if(inputPW=='4312'): break

# count=0
# result=0
# while(count<1001):
#     if(count%3==0):
#         result+=count
#     count+=1
# print('HAP!',result)

# def gop(left, right):
#     print(left,"x",right,"=",left*right)
# for i in range(1,10):
#     gop(3,i)

# volume=3;
# def increase(prev,volume):
#     prev+=volume
#     return prev
# print("지금 음량",volume)
# plus=int(input( "올리고 싶은 음량: "))
# print(increase(volume,plus))

class Human:
    def __init__(self,name,age,sex):
        self.name= name
        self.age =age
        self.sex=sex
    def who(self):
        print(self.name,'/',self.age,'(',self.sex,')' )
        print('아직 관심을 받고싶을 나이')

soyun = Human("장소윤",21,"여")
soyun.who()

sumin = Human("박수민", 23, "여")
sumin.who()


