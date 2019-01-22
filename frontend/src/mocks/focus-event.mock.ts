export class FocusEventMock {
    target = {
        select: () => { },
        setSelectionRange: (start: number, end: number) => { }
    };
}