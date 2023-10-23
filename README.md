# Block1

В папке Pages
1) /data-binding - в компоненте примеры привязки данных
2) /life-cycle-hooks - примеры использования хуков, Input, Output
3) /templates-pages - примеры использования ng-conent, ng-template, ng-container, ngTemplateOutlet
4) /view-encapsulation - примеры использования методанных encapsulation.

   4.1 В папках v-e-emulated, v-e-none, n-e-shadow - простые компоненты с разными инкаспуляциями, в шаблонах которых есть только параграф.

   4.2 в папке v-e-shadow-child содержится компонент с инкапсуляцией shadowDom. В его темплейте кроме параграфа добавлены дочерние компоненты v-e-none, v-e-emulated. Для того чтобы проверить влияние стилей между дочерними и родительскими компонентами. В итоге стили v-e-shadow-child перебили стили v-e-none.

   4.3 в папке v-e-home содержится обычный компонент с дефолтной инкапсуляцией. В его шаблоне, кроме параграфа, добавила компоненты с v-e-emulated, v-e-none, n-e-shadow. Если последним поставить дочерний компонент с shadowDom, то все компоненты сохраняют свои стили. А если последним оставить None, то дочерний компонент с shadowDom меняет свои стили на глобальные.
6) /viewContentChild - примеры использования ViewChild/Children, ContenChild/Children
    
