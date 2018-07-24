import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiModelProperty({ required: true })
  readonly title: string;

  @ApiModelProperty({ required: false, default: false })
  readonly completed?: boolean;

  @ApiModelProperty({ required: false })
  readonly order?: number;
}
