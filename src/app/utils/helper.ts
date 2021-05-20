import { Subscription } from "rxjs";

export class Helper {
    public static unSubscribeIfActive(subscription: Subscription): void {
        if (subscription != null) subscription.unsubscribe();
    }
}