# HW24 JS GOF

В задании использовать паттерны: module и (observable или pub/sub или mediator):
Реализовать три модуля (Billy, Rose, Jack) как на картинке. С помощью модуля описываете объекты Billy, Rose, Jack.
Реализовать поведение с картинки.
Rose подписана на сообщения от Billy и Jack. 
Billy и Jack подписаны на сообщения от Rose.
При получении любовного сообщения от Jack, Rose отправляет сообщение Billy, вследствии который убегает. Rose отправляет сообщение Billy, Billy при получении сообщения выводит в консоль run или отправляет ответное сообщение для Rose.

