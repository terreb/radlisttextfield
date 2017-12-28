import { EventData } from 'data/observable'
import { Page } from 'ui/page'
import { HelloWorldModel } from './main-view-model'

let vm

export function navigatingTo( args: EventData ) {
    const page = <Page>args.object
    page.bindingContext = vm = new HelloWorldModel()
}

export function onItemTap( args ) {
    // console.dir( args.view.bindingContext )
}

export function onLabelTap() {
    console.log('on label tap')
}

// Processing the itemSwipeProgressStartedEvent to limit the swiping distance
export function onSwipeCellStarted( args ) {
    const swipeLimits = args.data.swipeLimits
    const swipeView = args.object
    const edit = swipeView.getViewById( 'edit' )
    const del = swipeView.getViewById( 'delete' )
    swipeLimits.left = edit.getMeasuredWidth()
    swipeLimits.right = del.getMeasuredWidth()
    // swipeLimits.threshold = edit.getMeasuredWidth() / 2
}