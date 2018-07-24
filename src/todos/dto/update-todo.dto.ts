import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiModelProperty({ required: false })
  readonly title?: string;

  @ApiModelProperty({ required: false })
  readonly completed?: boolean;

  @ApiModelProperty({ required: false })
  readonly order?: number;
}
