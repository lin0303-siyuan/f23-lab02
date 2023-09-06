class Rectangle implements Shape{
    private width: number
    private height: number
    public computeArea(): number {
        return this.width * this.height
    }
    public constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }
}

function newRectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export { Rectangle, newRectangle }
